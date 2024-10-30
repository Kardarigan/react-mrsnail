function Share_Button({ title, text, url, customClass }) {
  const handleShare = async (event) => {
    event.preventDefault();

    if (navigator.share) {
      try {
        await navigator.share({
          title: title || "اینجارو داشته باش!",
          text: text || "یه چی پیدا کردم از آقای حلزون حتما باید ببینی :",
          url: url || window.location.href,
        });
        console.log("Successfully shared");
      } catch (error) {
        console.error("Error sharing:", error);
      }
    } else {
      alert("Sharing is not supported on this browser");
    }
  };

  return (
    <button
      className={customClass}
      onClick={handleShare}
      title="اشتراک گزاری 🐌"
    >
      <i className="fa-regular fa-share-nodes"></i>
    </button>
  );
}

export default Share_Button;
