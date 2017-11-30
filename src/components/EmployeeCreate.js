// import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import { employeeUpdate } from '../actions';
// import { Card, CardSection, Input, Button } from './common';
//
// class EmployeeCreate extends Component {
//   render() {
//     return (
//       <Card>
//         <CardSection>
//           <Input
//             label="Name"
//             placeholder="Jane"
//             value={this.props.name}
//             onChangeText={value => this.props.employeeUpdate({ prop: 'name', value })}
//           />
//         </CardSection>
//
//         <CardSection>
//           <Input
//             label="Phone"
//             placeholder="555-555-5555"
//             value={this.props.phone}
//             onChangeText={value => this.props.employeeUpdate({ prop: 'phone', value })}
//           />
//
//         </CardSection>
//
//         <CardSection>
//           <Button>
//             Create
//           </Button>
//         </CardSection>
//       </Card>
//     );
//   }
// }
// const mapStateToProps = (state) => {
//   const { name, phone, shift } = state.employeeForm;
//     return { name, phone, shift };
// };

//
// export default connect(mapStateToProps, { employeeUpdate })(EmployeeCreate);
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { employeeUpdate, employeeCreate } from '../actions';
import { Card, CardSection, Button } from './common';
//import EmployeeForm from './EmployeeForm';

class EmployeeCreate extends Component {
  onButtonPress() {
    const { name, phone, shift } = this.props;

    this.props.employeeCreate({ name, phone, shift: shift || 'Monday' });
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}>
            Create
          </Button>
        </CardSection>
      </Card>
    );
  }
}

const mapStateToProps = (state) => {
  const { name, phone, shift } = state.employeeForm;

  return { name, phone, shift };
};

export default connect(mapStateToProps, {
  employeeUpdate, employeeCreate
})(EmployeeCreate);
