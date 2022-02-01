import React from "react";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../../../common/FormsControls/FormsControls";

const maxLength50 = maxLengthCreator(50)

const AddMessageForm = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field
                    component={Textarea}
                    name={"newMessageBody"}
                    placeholder={"enter your message"}
                    validate={[required, maxLength50]}
                />
            </div>
            <div>
                <button>Send</button>
            </div>
        </form>
    )
}
export const AddMessageFormRedux = reduxForm({form: "dialogAddMessageForm"})(AddMessageForm)