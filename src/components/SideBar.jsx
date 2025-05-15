export default function SideBar(props){
    const {handleToggleModal, data} = props;
    return(
        <div className="sidebar">
            {/* Semi-transparent overlay that, when clicked, closes the sidebar */}
            <div onClick={handleToggleModal} className="bgOverlay"></div>
            <div className="sidebarContents">
                {/* Main content of the sidebar */}
                <h2>{data?.title}</h2>
                {/* Container for the date and description */}
                <div className="descriptionContainer">
                    {/* <p className="descriptionTitle">Description</p> */}
                    <p className="descriptionTitle">{data?.date}</p>
                    <p>
                        {data?.explanation}
                    </p>
                </div>
                {/* Toggle button to open/close sidebar */}
                <button onClick={handleToggleModal}>
                <i className="fa-solid fa-arrow-right"></i>
                </button>
            </div>
        </div>
    )
}