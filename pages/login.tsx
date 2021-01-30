import { useForm } from "react-hook-form";
import InputField from "../components/ui/InputField";
import Button from "../components/ui/Button";
import {
  AiFillGoogleCircle,
  AiFillTwitterCircle,
  AiFillFacebook,
} from "react-icons/ai";

type Inputs = {
  email: string;
  password: string;
};

const Login: React.FC = () => {
  const { register, handleSubmit, errors } = useForm<Inputs>();

  const onFormSubmit = (data: Inputs) => console.log(data);

  return (
    <div className="flex items-center justify-center w-screen h-screen bg-white">
      <div className="w-full max-w-md mx-4 border border-gray-200 rounded sm:w-96">
        <div className="p-4 bg-gray-50">
          <h1 className="mb-5 text-2xl font-medium text-center">
            Login to Send bytes
          </h1>
          <form className="space-y-5" onSubmit={handleSubmit(onFormSubmit)}>
            <InputField
              name="email"
              label="Email Address"
              ref={register({ required: true })}
              error={errors.email}
            />
            <InputField
              name="password"
              label="Password"
              type="password"
              ref={register({ required: true })}
              error={errors.password}
            />

            <Button label="Sign in" type="submit" primary fullWidth />
          </form>
          <div className="mt-6 text-sm">
            <p>
              New to Send bytes?{" "}
              <a
                href=""
                className="text-blue-700 focus:underline focus:text-gray-500"
              >
                Create Account
              </a>
            </p>
          </div>
        </div>
        <div className="p-4 bg-white">
          <p className="mb-3 text-xs text-gray-500">Sign in with</p>
          <div className="flex flex-wrap justify-between">
            <Button label="Google" customClass="flex items-center" outline>
              <AiFillGoogleCircle className="mr-2" />
            </Button>
            <Button label="Twitter" customClass="flex items-center" outline>
              <AiFillTwitterCircle className="mr-2" />
            </Button>
            <Button label="Facebook" customClass="flex items-center" outline>
              <AiFillFacebook className="mr-2" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
