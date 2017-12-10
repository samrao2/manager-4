import React from 'react';
import { Scene, Router, Actions, Stack } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import EmployeeCreate from './components/EmployeeCreate';
import EmployeeEdit from './components/EmployeeEdit';

const RouterComponent = () => {
  return (
    <Router sceneStyle={{ paddingTop: 0 }}>
    <Stack key="root" hideNavBar="true" >
      <Scene key="auth">
        <Scene key="login" component={LoginForm} title="Please Login" />
      </Scene>

      <Scene key="main">
        <Scene
          key="employeeList"
          route="main"
          onRight={() => Actions.employeeCreate()}
          rightTitle="Add"
          component={EmployeeList}
          title="Employees List"
          initial
        />
        <Scene key="employeeCreate" component={EmployeeCreate} title="Create Employee" />
        <Scene key="employeeEdit" component={EmployeeEdit} title="Edit Employee" />
      </Scene>
      </Stack>
    </Router>
  );
};

export default RouterComponent;
