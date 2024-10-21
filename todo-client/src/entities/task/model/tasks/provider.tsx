import React from "react";
import { ErrorBoundary } from "react-error-boundary";
import { useAsync } from "react-use";

import { Loader } from "shared/ui";

import { tasksLoaderService } from "./service";

export const TasksProvider = React.memo(function TaskDetailsProvider({ children }: { children: React.ReactNode }) {
  const { loading } = useAsync(async () => {
    await tasksLoaderService.loadTasks.bind(tasksLoaderService)();
  }, []);

  if (loading) return <Loader />;

  return <ErrorBoundary fallback={<p>Something went wrong</p>}>{children}</ErrorBoundary>;
});
