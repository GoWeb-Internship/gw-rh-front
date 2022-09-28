const DialogWindow = ({classNameDiv, classNameP, text}) => {
    return (
    <div className={`absolute px-8 flex items-center max-w-[220px] h-20 bg-light shadow-btnSh rounded-2xl  ${classNameDiv}`}>
        <p className={` text-blue text-center text-sm leading-[16px] font-semibold ${classNameP}`}>{text}</p>
    </div>
    );
};

export default DialogWindow;