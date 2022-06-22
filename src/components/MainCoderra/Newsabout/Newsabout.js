import React from "react";
import "./_newsabout.scss";

function Newsabout() {
  return (
    <div className="Newsabout">
      <div className="center">
        <p>Yeniliklərdən xəbərdar olmaq istəyirsinizsə abunə olun.</p>
        <form onSubmit={(e)=> {e.preventDefault()}}>
          <label>
            <input placeholder="Emailinizi daxil edin" />
            <button onClick={()=> {alert('Abunəliyiniz qeydə alınmışdır !')}} type="submit">abunə olun</button>
          </label>
        </form>
      </div>
    </div>
  );
}

export default Newsabout;
