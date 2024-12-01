import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { NavLink } from "react-router";
import {
  Form,
  FormControl,
  FormDescription,
  FormLabel,
  FormMessage,
  FormField,
  FormItem,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Img from "@/components/custom/Img";
//hooks
import { useForm } from "react-hook-form";
import { useTheme } from "@/hooks/useTheme";

//shcema
import { LoginFormSchema } from "@/interfaces/zod";

//assets/
import LogOne from "@/assets/logoOne.png";
import LogTwo from "@/assets/LogoTwo.png";
import MainBG from "@/assets/mainBG.png";
type LoginFormProps = z.infer<typeof LoginFormSchema>;

const AuthPage = () => {
  const { theme, setTheme } = useTheme();
  const form = useForm<LoginFormProps>({
    resolver: zodResolver(LoginFormSchema),
  });
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = form;

  const onSubmit = async () => {};
  return (
    <div
      style={{
        backgroundImage: `url(${MainBG})`,
        backgroundSize: "cover", // Ensure the image covers the entire div
        backgroundPosition: "center", // Center the image
      }}
      id="main"
      className="w-full h-screen grid bg-[#ffffff] dark:bg-slate-900"
    >
      <div className="w-full h-full m-auto bg-slate-800 dark:bg-slate-800 md:w-1/2 md:h-1/4 lg:w-2/3 lg:h-3/4 rounded flex border border-slate-300">
        <div className=" w-full lg:w-1/2 h-full bg-white dark:bg-slate-700 shadow">
          <form className="w-full h-full p-2 lg:static flex flex-col justify-between">
            <div className="p-2 md:p-8">
              <div className="w-full flex h-24 p-4">
                <Img
                  className="w-20 h-20"
                  src={LogOne}
                  local={undefined}
                  name={""}
                />
                <div className="w-full p-2">
                  <h1 className="text-[#333] dark:text-white text-2xl font-bold text-center">
                    DILG
                  </h1>
                  <h1 className="text-center text-sm italic">
                    Internship Action Tracker <br />
                    (IAT)
                  </h1>
                </div>
                <Img
                  className="w-16 h-16"
                  src={LogTwo}
                  local={undefined}
                  name={""}
                />
              </div>
              <Form {...form}>
                <FormField
                  name="username"
                  render={({ field }) => (
                    <FormItem className="px-4 mt-8">
                      <FormControl>
                        <Input
                          {...field}
                          placeholder="Username"
                          className="border border-slate-500 focus:border-none"
                        />
                      </FormControl>
                      <div className="w-full h-6 border">
                        {errors.username && (
                          <h1 className="text-red-500 text-sm font-medium">
                            {errors.username.message}
                          </h1>
                        )}
                      </div>
                    </FormItem>
                  )}
                />
                <FormField
                  name="password"
                  render={({ field }) => (
                    <FormItem className="px-4">
                      <FormControl>
                        <Input
                          type="password"
                          {...field}
                          placeholder="Password"
                          className=""
                        />
                      </FormControl>
                      {errors.password && (
                        <h1 className="text-red-500 text-sm font-medium">
                          {errors.password.message}
                        </h1>
                      )}
                      <NavLink
                        to="#"
                        className="text-blue-500 text-sm hover:underline"
                      >
                        Forgot password?{" "}
                      </NavLink>
                    </FormItem>
                  )}
                />
              </Form>
            </div>

            <div className="w-full p-2">
              <Button
                type="submit"
                onClick={handleSubmit(onSubmit)}
                className="w-full self-center bg-[#db872e] hover:bg-[#b09639] dark:bg-slate-400 dark:hover:bg-slate-500 rounded-full"
                color="red"
              >
                Login
              </Button>

              <div className="w-full flex justify-center">
                <NavLink to="#" className="text-center text-blue-700 text-sm hover:underline">Don't have an account yet? Click here</NavLink>
              </div>
              {/* <div className="w-full p-2 flex justify-center">
                <Switch
                  id="darkSwitch"
                  className="dark:bg-slate-500 "
                  checked={theme === "dark"}
                  onCheckedChange={(checked) =>
                    setTheme(checked ? "dark" : "light")
                  }
                />
                <Label htmlFor="darkSwitch">Use dark mode?</Label>
              </div> */}
            </div>
          </form>
        </div>
        <Separator
          className="bg-slate-900 hidden md:visible lg:flex"
          orientation="vertical"
        />
        <div className="w-1/2 h-full bg-white dark:bg-slate-700 hidden md:visible lg:flex"></div>
      </div>
    </div>
  );
};

export default AuthPage;
