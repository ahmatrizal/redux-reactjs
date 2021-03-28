import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import { FormGroup, Col, FormLabel, FormControl, Row, Button } from 'react-bootstrap'
import  UserValidation  from '../validations/UserValidation'

const renderField = ({
    input,
    type,
    placeholder,
    label,
    disabled,
    readOnly,
    meta: { touched, error, warning },
}) => (
    <Row>
        <Col md="12">
            <FormLabel htmlFor="{input}" className="col-form-label">
                {label}
            </FormLabel>
        </Col>
        <Col md="12">
            <FormControl
                {...input}
                type={type}
                placeholder={placeholder}
                disabled={disabled}
                readOnly={readOnly}
            ></FormControl>
            {touched &&
                ((error && <p style={{ color: "red" }}>{error}</p>) ||
                    (warning && <p style={{ color: "brown" }}>{warning}</p>))}
        </Col>
    </Row>
);

const mapStateToProps = (state) => {
    return {
        initialValues: {
            nama: state.users.getUserDetail.nama,
            nohp: state.users.getUserDetail.nohp,
            alamat: state.users.getUserDetail.alamat,
            umur: state.users.getUserDetail.umur,

        }
    }
}


class FormComponent extends Component {
    render() {
        return (
            <form onSubmit={this.props.handleSubmit}>
                <FormGroup row className="justify-content">
                    <Col md={{ span: 6, offset: 3 }}>
                        <FormGroup>
                            <Field
                                type="text"
                                name="nama"
                                component={renderField}
                                label="Nama :"
                            />
                        </FormGroup>
                    </Col>

                    <Col md={{ span: 6, offset: 3 }}>
                        <FormGroup>
                            <Field
                                type="text"
                                name="alamat"
                                component={renderField}
                                label="Alamat :"
                            />
                        </FormGroup>
                    </Col>

                    <Col md={{ span: 6, offset: 3 }}>
                        <FormGroup>
                            <Field
                                type="text"
                                name="nohp"
                                component={renderField}
                                label="No HP :"
                            />
                        </FormGroup>
                    </Col>

                    <Col md={{ span: 6, offset: 3 }}>
                        <FormGroup>
                            <Field
                                type="text"
                                name="umur"
                                component={renderField}
                                label="Umur :"
                            />
                        </FormGroup>
                    </Col>
                </FormGroup>

                <FormGroup row>
                    <Col md={{ span: 6, offset: 3 }}>
                        <FormGroup>
                            <Button
                                variant="outline-dark"
                                type="submit"
                                disabled={this.props.submitting}
                            >
                                Save
              </Button>
                        </FormGroup>
                    </Col>
                </FormGroup>
            </form>
        );
    }
}


FormComponent = reduxForm({
    form: "formCreateUser",
    validate: UserValidation,
    enableReinitialize: true,
})(FormComponent);

export default connect(mapStateToProps, null)(FormComponent);
