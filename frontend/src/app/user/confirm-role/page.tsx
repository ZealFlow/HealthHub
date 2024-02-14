import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faUserDoctor } from '@fortawesome/free-solid-svg-icons';

export default function ConfirmRole () {
    return (
        <>
            <div className="confirm-role">
                <header className="headerPage headerPage__user"></header>
            <div className="content flex justify-center" style={{ height: 'calc(100vh - 84px)' }}>
                    <div className="container flex-col items-center flex justify-center">
                        <div className="selectOption h-96 w-180">
                            <div>
                                <FontAwesomeIcon icon={faUsers} className='awesome-icon'/>
                                <span>Người dùng</span>
                            </div>
                            <div>
                                <FontAwesomeIcon icon={faUserDoctor} className='awesome-icon'/>
                                <span>Bác sĩ</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
