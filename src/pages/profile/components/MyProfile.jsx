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
        <div className="tab1">
            <label>
                <p>Họ và tên<span>*</span></p>
                <input type="text" placeholder="Nguyễn Văn A" />
            </label>
            <label>
                <p>Số điện thoại<span>*</span></p>
                <input type="text" placeholder="0949******" />
            </label>
            <label>
                <p>Email<span>*</span></p>
                <input defaultValue="vuong.dang@dna.vn" disabled type="text" />
            </label>
            <label>
                <p>Facebook<span>*</span></p>
                <input type="text" placeholder="Facebook url" />
            </label>
            <label>
                <p>Skype<span>*</span></p>
                <input type="text" placeholder="Skype url" />
            </label>
            <div className="btn main rect">LƯU LẠI</div>
        </div>
    )
}