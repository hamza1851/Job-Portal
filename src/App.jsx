import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom"
import MainLayout from "./layouts/MainLayout"
import HomePage from "./pages/HomePage"
import JobsPage from "./pages/JobsPage"
import NotFoundPage from "./pages/NotFoundPage"
import JobPageSingular, { jobLoader } from "./pages/JobPageSingular"
import AddJobPage from "./pages/AddJobPage"

const App = () => {
  const addJob = (newJob) => {
    console.log(newJob)
  }

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/jobs" element={<JobsPage />} />
        <Route path="/add-job" element={<AddJobPage addJobSubmit={addJob} />} />

        <Route
          path="/jobs/:id"
          element={<JobPageSingular />}
          loader={jobLoader}
        />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    )
  )

  return <RouterProvider router={router} />
}

export default App
