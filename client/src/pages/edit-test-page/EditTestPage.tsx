import { createTest, getTestById } from "api/tests-api";
import { Layout } from "components/layout/Layout";
import { TestController } from "components/test-controller/TestController";
import { FC } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { Test } from "types/tests";
import { useMutation, useQuery, useQueryClient } from "react-query";

export const EditTestPage: FC = () => {
  const navigate = useNavigate();
  const {testId} = useParams();
  const queryClient = useQueryClient();

  const {data: test} = useQuery(
    ['test'],
    () => getTestById(testId || ''),
    {
      onError: (error: any) => {
        if(error.response.status === 401) {
          localStorage.removeItem("token");
          navigate("/login");
      }
    }
  });

  const {mutate} = useMutation({
    mutationFn: createTest,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['user-tests'] });
      navigate("/user-tests");
    },
    onError: (error: any) => {
      if(error.response.status === 401) {
        localStorage.removeItem("token");
        navigate("/login");
      }
    }
  });

  const handleSubmit = ({ name, description, questions }: Omit<Test, "creatorId" | "_id">) => {
    const testData = {
      name,
      description,
      questions: questions.map(question => {
        const { _id, ...rest } = question;
        const newOptions = rest.options.map(option => {
          const { _id, ...rest } = option;
          return rest;
        });
        return { ...rest, options: newOptions };
      })
    }
    mutate(testData);
  }

  return (
    <Layout pageName="Edit test">
      <TestController test={test} handleSubmit={handleSubmit} />
    </Layout>
  );
};
