import { createTest } from "api/tests-api";
import { Layout } from "components/layout/Layout";
import { TestController } from "components/test-controller/TestController";
import { FC } from "react";
import { useMutation, useQueryClient } from "react-query";
import { useNavigate } from "react-router-dom";
import { Test } from "types/tests";

export const CreateTestPage: FC = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const {mutate} = useMutation({
    mutationFn: createTest,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['user-tests'] });
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
    <Layout pageName="Create test">
      <TestController handleSubmit={handleSubmit} />
    </Layout>
  );
};
