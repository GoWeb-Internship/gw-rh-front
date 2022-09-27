const DialogWindow = ({classNameDiv, classNameP, text}) => {
    return (
    <div className={`absolute px-8 py-4 ${classNameDiv}`}>
        <p className={` text-blue text-center text-sm leading-[16px] font-semibold ${classNameP}`}>{text}</p>
    </div>
    );
};

export default DialogWindow;