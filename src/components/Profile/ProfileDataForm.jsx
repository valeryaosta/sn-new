import React from "react";
import s from "./Profile.module.css";
import {createField, Input, Textarea2} from "../common/FormsControls/FormsControls";
import {reduxForm} from "redux-form";
import st from "../common/FormsControls/FormsControls.module.css";


const ProfileDataForm = ({profile, handleSubmit, error}) => {
    return (
        <form onSubmit={handleSubmit}>
            <button className={s.edit}>save</button>
            {error && <div className={st.formSummaryError}>{error}</div>}

            <div className={s.contacts}>


                <div className={s.left}>

                    <b className={s.name}>Name:<b
                        className={s.fullName}> {createField('Full name', 'fullName', Input, [])}</b>
                    </b>

                    <span><b>About me:</b> {createField('About me', 'aboutMe', Input, [])}
                </span>
                    <div className={s.check}><b>Looking for a job: </b>
                        <div className={s.formCheck}>{createField('', 'lookingForAJob', Input, [], {type: 'checkbox'})}
                        </div>
                    </div>
                    <div><b>Description: </b>
                        {createField('', 'lookingForAJobDescription', Textarea2, [])}
                    </div>
                </div>

                <div className={s.right}>
                    <b>Contacts</b>: {Object.keys(profile.contacts).map((key) => {
                    return <div className={s.contact} key={key}>
                        <b>{key}: {createField(key, 'contacts.' + key, Input, [])}</b>
                    </div>
                })}
                </div>

            </div>

        </form>
    )
}

export const ProfileDataReduxForm = reduxForm({
    form: 'edit-profile',
    enableReinitialize: true,
    destroyOnUnmount: false
})(ProfileDataForm)


