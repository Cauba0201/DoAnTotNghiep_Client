import { lazy, Suspense, useEffect, useState } from 'react';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import DefaultLayout from './layout/DefaultLayout';
import Loader from './common/Loader';
import PageTitle from './components/PageTitle';

// Lazy load các trang để tối ưu hiệu suất
const SignIn = lazy(() => import('./pages/Authentication/SignIn'));
const SignUp = lazy(() => import('./pages/Authentication/SignUp'));
const Calendar = lazy(() => import('./pages/Calendar'));
const Chart = lazy(() => import('./pages/Chart'));
const ECommerce = lazy(() => import('./pages/Dashboard/ECommerce'));
const FormElements = lazy(() => import('./pages/Form/FormElements'));
const FormLayout = lazy(() => import('./pages/Form/FormLayout'));
const Profile = lazy(() => import('./pages/Profile'));
const Settings = lazy(() => import('./pages/Settings'));
const Tables = lazy(() => import('./pages/Tables'));
const Alerts = lazy(() => import('./pages/UiElements/Alerts'));
const Buttons = lazy(() => import('./pages/UiElements/Buttons'));
const UserTest = lazy(() => import('./pages/UserTest'))
const Test = lazy(() => import('./pages/Test'))

function App() {
  const [loading, setLoading] = useState<boolean>(true);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);

  useEffect(() => {
    setLoading(false);
  }, []);

  if (loading) return <Loader />;

  return (
    <DefaultLayout>
      <Suspense fallback={<Loader />}>
        <Routes>
        <Route path="/" element={<Navigate to="/auth/signin" />} />
          {/* Trang SignIn */}
          <Route
            path="/auth/signin"
            element={<PageWithTitle title="Signin | TailAdmin" component={<SignIn />} />}
          />

          {/* Các trang khác */}
          <Route
            path="/"
            element={<PageWithTitle title="eCommerce Dashboard | TailAdmin" component={<ECommerce />} />}
          />
          <Route
            path="/calendar"
            element={<PageWithTitle title="Calendar | TailAdmin" component={<Calendar />} />}
          />
          <Route
            path="/profile"
            element={<PageWithTitle title="Profile | TailAdmin" component={<Profile />} />}
          />
          <Route
            path="/userTest"
            element={<PageWithTitle title="UserTest | TailAdmin" component={<UserTest />} />}
          />
           <Route
            path="/test"
            element={<PageWithTitle title="UserTest | TailAdmin" component={<Test />} />}
          />
          <Route
            path="/forms/form-elements"
            element={<PageWithTitle title="Form Elements | TailAdmin" component={<FormElements />} />}
          />
          <Route
            path="/forms/form-layout"
            element={<PageWithTitle title="Form Layout | TailAdmin" component={<FormLayout />} />}
          />
          <Route
            path="/tables"
            element={<PageWithTitle title="Tables | TailAdmin" component={<Tables />} />}
          />
          <Route
            path="/settings"
            element={<PageWithTitle title="Settings | TailAdmin" component={<Settings />} />}
          />
          <Route
            path="/chart"
            element={<PageWithTitle title="Basic Chart | TailAdmin" component={<Chart />} />}
          />
          <Route
            path="/ui/alerts"
            element={<PageWithTitle title="Alerts | TailAdmin" component={<Alerts />} />}
          />
          <Route
            path="/ui/buttons"
            element={<PageWithTitle title="Buttons | TailAdmin" component={<Buttons />} />}
          />
          <Route
            path="/auth/signup"
            element={<PageWithTitle title="Signup | TailAdmin" component={<SignUp />} />}
          />
        </Routes>
      </Suspense>
    </DefaultLayout>
  );
}

export default App;

interface PageWithTitleProps {
  title: string;
  component: JSX.Element;
}

// Component chung để bao bọc mỗi trang với tiêu đề
const PageWithTitle: React.FC<PageWithTitleProps> = ({ title, component }) => {
  useEffect(() => {
    document.title = title;
  }, [title]);

  return (
    <>
      <PageTitle title={title} />
      {component}
    </>
  );
};
