import { FC, useEffect, useRef, useState } from "react";
import "./App.css";

function App() {
  const [isPopupVisible, setPopupVisible] = useState(false);
  const popupRef = useRef<HTMLDivElement | null>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (popupRef.current && !popupRef.current.contains(event.target as Node)) {
      setPopupVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const togglePopup = () => {
    setPopupVisible(!isPopupVisible);
  };

  return (
    <>
      <div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
          officia est aliquid et recusandae nostrum a consequuntur quae unde?
          Quia accusamus culpa suscipit dicta eum reprehenderit harum inventore,
          possimus minus molestiae animi eos debitis, delectus ratione est fuga
          autem natus mollitia perspiciatis cum soluta ducimus. Delectus dicta
          rem laudantium accusantium quo sapiente fuga accusamus, recusandae
          voluptatibus enim commodi libero fugit id, veniam non officia
          architecto perspiciatis atque facilis porro consequatur! Aperiam odio
          laboriosam labore enim aut mollitia non cupiditate perferendis
          excepturi expedita quia soluta dicta tenetur itaque culpa veritatis
          eum, neque qui iure. Id ut minima eaque beatae vitae, corporis unde
          ipsam dolor. Quaerat ipsum blanditiis harum reprehenderit totam, sint
          veniam nisi voluptates nesciunt minima atque nihil possimus quasi hic
          eaque, consequuntur dicta! Sint minima asperiores eum voluptatem?
          Veritatis, repellendus dolorum, ipsum consequuntur doloremque quidem
          deserunt tempora possimus placeat fuga exercitationem! Eveniet alias
          ullam sequi veniam dolorem officia adipisci! Velit, quod! Nulla aut
          eius modi maxime sed illo atque consequatur laborum, temporibus
          dignissimos sunt saepe, harum veniam nihil quasi quis? Facilis vel
          illum, nulla delectus facere perferendis ipsum dolore maiores
          provident libero quos obcaecati officia commodi, ullam itaque nam.
          Voluptas molestias maiores laborum exercitationem repellat cumque
          assumenda a error natus.
        </p>
        <button onClick={togglePopup}>Toggle Popup</button>
        <Popup
          showPopup={isPopupVisible}
          onClose={togglePopup}
          popupRef={popupRef}
        />
      </div>
    </>
  );
}

interface PopupProps {
  showPopup: boolean;
  onClose: () => void;
  popupRef: React.RefObject<HTMLDivElement>;
}

const Popup: FC<PopupProps> = ({ showPopup, onClose }) => {
  return (
    <>
      {showPopup && (
        <div className="backdrop" onClick={onClose}>
          <div className="popup">
            <div className="popup-content">
              <button className="close-btn" onClick={onClose}>
                &times;
              </button>
              <p>This is a popup content.</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default App;
