import { App } from '@/app';
import { AuthRoute } from '@routes/auth.route';
import { TestRoute } from "@routes/tests.route";

const app = new App([new AuthRoute(), new TestRoute()]);

app.listen();
