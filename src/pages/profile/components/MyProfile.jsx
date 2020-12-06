import { useAuth } from "../../../core/hooks/useAuth";
import useValidateForm from "../../../core/hooks/useValidateForm";
// import { useAuth } from "../../../core/hooks/useAuth";
// import useValidateForm from "../../../core/hooks/useValidateForm"

export default function MyProfile() {

    let { user } = useAuth();

    let { data, error, inputChange, onSubmit } = useValidateForm({
        
        name: '',
        phone: '',
        // email: 'vuong.dang@dna.vn',
        facebook: '',
        skype: '',
        ...user,
    }, {
        validate: {
            name: {
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
            name: {
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

    function submit() {
        let error = onSubmit();
        if (!error) {
            console.log('call ajax')
        }
    }


    return (
        <div className="tab__content-1">
            <form action="/" method="POST">
                <div className="field">
                    <label>Họ và Tên</label>
                    <input onChange={inputChange} type="text" name="name" value={data.name} />
                    {error.name && <p className="input-error">{error.name}</p>}
                </div>
                <div className="field">
                    <label>Số điện thoại*</label>
                    <input onChange={inputChange} type="text" name="phone" value={data.phone} />
                    {error.phone && <p className="input-error">{error.phone}</p>}

                </div>
                <div className="field">
                    <label>Email</label>
                    <input type="text" name="email" disabled value={user.email} />

                </div>
                <div className="field">
                    <label>Facebook</label>
                    <input onChange={inputChange} type="text" name="facebook" value={data.facebook} />
                    {error.facebook && <p className="input-error">{error.facebook}</p>}

                </div>
                <div className="field">
                    <label>Skype</label>
                    <input onChange={inputChange} type="text" name="skype" value={data.skype} />
                    {error.skype && <p className="input-error">{error.skype}</p>}
                </div>
                <div className="btn-register btn-save" onClick={submit}>LƯU LẠI</div>
            </form>
        </div>
    )
}