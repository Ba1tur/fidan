import React, {useState} from 'react';

const FeedbackForm = () => {
    const [currentSelect, setCurrentSelect] = useState({
        purchase: true,
        consultation: false,
    })

    const handleSelect = (select, unSelect) => {
        setCurrentSelect({...currentSelect, [select]:true, [unSelect]:false})
    }

    return (
        <form className={'feedback__form'}>
            <div className={'feedback__form-name'}>
                <input type="text" placeholder={'Имя'}/>
                <input type="text" placeholder={'Email'}/>
            </div>
            <div className={'feedback__form__number'}>
                <input type="text" placeholder={'Номер телефона'}/>
            </div>
            <div className={'feedback__form__select'}>
                <div
                    className={currentSelect.purchase ? 'feedback__form__select-item isSelected' : 'feedback__form__select-item'}
                    onClick={()=>handleSelect('purchase', 'consultation')}
                >
                    <span>Покупка</span>
                </div>
                <div
                    className={currentSelect.consultation ? 'feedback__form__select-item isSelected' : 'feedback__form__select-item'}
                    onClick={()=>handleSelect('consultation','purchase')}
                >
                    <span>Консультация</span>
                </div>
            </div>
            <div className={'feedback__form__textarea'}>
                <label>Ваше сообщение</label>
                <textarea/>
            </div>
            <div className={'feedback__form__button'}>
                <button type={'submit'}>Отправить</button>
            </div>
        </form>
    );
};

export default FeedbackForm;