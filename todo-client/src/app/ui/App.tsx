import React, { Component } from "react";
import TaskTracker from "components/TaskTracker/TaskTracker";

import { TasksProvider } from "../../entities/task";
import { UsersProvider } from "../../entities/user";

import { AppStyled } from "./AppStyled";
import { GlobalStyles } from "./GlobalStyles";

export class App extends Component {
  public render() {
    return (
      <>
        <GlobalStyles />
        <AppStyled>
          <TasksProvider>
            <UsersProvider>
              <TaskTracker />
            </UsersProvider>
          </TasksProvider>
        </AppStyled>
      </>
    );
  }
}
