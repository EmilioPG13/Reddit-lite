function BoardHeader() {
    return (
        <>
            {/* Banner */}
            <div className="h-20 bg-cover" style={{ backgroundImage: 'url("https://styles.redditmedia.com/t5_2qs0q/styles/bannerBackgroundImage_7glcgg5ymxp21.png")' }}>
            </div>
            {/* Board Header */}
            <div className="bg-reddit_dark-brighter">
                {/* Header Content */}
                <div className="mx-6 relative flex">
                    {/* Board Icon */}
                    <div className="h-20 w-20 rounded-full overflow-hidden relative -top-4 border-4 border-white bg-white">
                        <img src="https://styles.redditmedia.com/t5_2qs0q/styles/communityIcon_kxcmzy9bt1381.jpg?format=pjpg&s=16025192cd7824a5f93aaa0ed9eb4f149761e18e"></img>
                    </div>
                    {/* Board Title */}
                    <div className="pt-5 pl-4 font-semibold">
                        <h1 className="text-gray-400 text-4xl">r/webdev</h1>
                    </div>
                </div>
            </div>
        </>
    );
}

export default BoardHeader;