import { useAuth } from "../../../core/hooks/useAuth";
import useValidateForm from "../../../core/hooks/useValidateForm";
import Notification from "../../../core/hooks/useNotification";
// import { useAuth } from "../../../core/hooks/useAuth";
// import useValidateForm from "../../../core/hooks/useValidateForm"

export default function MyProfile() {

    let { user } = useAuth();

    let { data, error, inputChange, onSubmit } = useValidateForm({

        phone: '',
        // email: 'vuong.dang@dna.vn',
        facebook: '',
        skype: '',
        ...user,
    }, {
        validate: {
            title: {
                required: true
            },
            email: {
                required: true,
                pattern: 'email'
            },
            phone: {
                required: true,
                pattern: 'phone'
            },
            facebook: {
                required: true,
                pattern: 'url'
            },
            skype: {
                required: true,
            },
        },
        message: {
            title: {
                required: 'Họ tên là bắt buộc'
            },
            email: {
                required: 'Email là bắt buộc',
                pattern: 'Email không đúng định dạng'
            },
            phone: {
                required: 'Số điện thoại là bắt buộc',
                pattern: 'Số điện thoại không đúng định dạng'
            },
            facebook: {
                required: "Link Facebook là bắt buộc",
                pattern: 'Link Facebook không đúng định dạng'
            },
            skype: {
                required: "Link skype là bắt buộc"
            }
        }
    })
    function _submit() {
        let error = onSubmit();
        if (!error) {
            <Notification />
        }
    }


    return (
        <div className="tab1">
            <label>
                <p>Họ và tên<span>*</span></p>
                <input type="text" onChange={inputChange} name="title" value={data.title} placeholder="Nguyễn Văn A" />
                {error.title && <p className="input-error">{error.title}</p>}
            </label>
            <label>
                <p>Số điện thoại<span>*</span></p>
                <input type="text" onChange={inputChange} name="phone" value={data.phone} placeholder="0949******" />
                {error.phone && <p className="input-error">{error.phone}</p>}

            </label>
            <label>
                <p>Email<span>*</span></p>
                <input value={data.email} onChange={inputChange} name="email" disabled type="text" />
            </label>
            <label>
                <p>Facebook<span>*</span></p>
                <input type="text" onChange={inputChange} name="facebook" value={data.facebook} placeholder="Facebook url" />
                {error.facebook && <p className="input-error">{error.facebook}</p>}
            </label>
            <label>
                <p>Skype<span>*</span></p>
                <input type="text" onChange={inputChange} name="skype" value={data.skype} placeholder="Skype url" />
                {error.skype && <p className="input-error">{error.skype}</p>}
            </label>
            <div className="btn main rect" onClick={_submit}>LƯU LẠI</div>
        </div>
    )
}