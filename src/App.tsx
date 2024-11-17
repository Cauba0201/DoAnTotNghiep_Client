import { lazy, Suspense, useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import DefaultLayout from './layout/DefaultLayout';
import Loader from './common/Loader';
import PageTitle from './components/PageTitle';
// import ConnectApp from './pages/Dashboard/ConnectApp';
// import GlobalPing from './pages/GlobalePing';
// import useToken from './hooks/useToken';

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
const GlobalePing =lazy(() => import('./pages/GlobalePing'))

function App() {
  const [loading, setLoading] = useState<boolean>(true);
  // const { token, setToken } = useToken();
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);

  useEffect(() => {
    setLoading(false);
  }, []);

  if (loading) return <Loader />;

  // if(!token) {
  //   return <SignIn setToken={setToken}/>
  // } else {
  //   <SignUp/>
  // }

  return (
    <DefaultLayout>
      <Suspense fallback={<Loader />}>
        <Routes>
          {/* Trang SignIn */}
          <Route
            path="/auth/signin"
            element={<PageWithTitle title="Signin | Monitor International Connection Quality" component={<SignIn />} />}
          />

          {/* Các trang khác */}
          <Route
            path="/"
            element={<PageWithTitle title="Dashboard | Monitor International Connection Quality" component={<ECommerce />} />}
          />
          {/* <Route
            path="/connectapp"
            element={<PageWithTitle title="Connect App | Monitor International Connection Quality" component={<ConnectApp />} />}
          /> */}
          <Route
            path="/calendar"
            element={<PageWithTitle title="Calendar | Monitor International Connection Quality" component={<Calendar />} />}
          />
          <Route
            path="/profile"
            element={<PageWithTitle title="Profile | Monitor International Connection Quality" component={<Profile />} />}
          />
          <Route
            path="/ping"
            element={<PageWithTitle title="Global Ping | Monitor International Connection Quality" component={<GlobalePing />} />}
          />
          <Route
            path="/forms/form-elements"
            element={<PageWithTitle title="Form Elements | Monitor International Connection Quality" component={<FormElements />} />}
          />
          <Route
            path="/forms/form-layout"
            element={<PageWithTitle title="Form Layout | Monitor International Connection Quality" component={<FormLayout />} />}
          />
          <Route
            path="/tables"
            element={<PageWithTitle title="Tables | Monitor International Connection Quality" component={<Tables />} />}
          />
          <Route
            path="/settings"
            element={<PageWithTitle title="Settings | Monitor International Connection Quality" component={<Settings />} />}
          />
          <Route
            path="/chart"
            element={<PageWithTitle title="Basic Chart | Monitor International Connection Quality" component={<Chart />} />}
          />
          <Route
            path="/ui/alerts"
            element={<PageWithTitle title="Alerts | Monitor International Connection Quality" component={<Alerts />} />}
          />
          <Route
            path="/ui/buttons"
            element={<PageWithTitle title="Buttons | Monitor International Connection Quality" component={<Buttons />} />}
          />
          <Route
            path="/auth/signup"
            element={<PageWithTitle title="Signup | Monitor International Connection Quality" component={<SignUp />} />}
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
