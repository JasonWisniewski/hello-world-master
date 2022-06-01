import React, {useState} from 'react';
import {IonButton, IonToast} from '@ionic/react';

function App() {

    const [showToast, setShowToast] = useState(false);
    const handleClick = () => {
        setShowToast(true);
        setTimeout(() => setShowToast(false), 1500);
    };

  return (
    <div>
      <header>
        <h1>My App</h1>
      </header>
      <main>
          <IonButton onClick={handleClick}> click me bitch </IonButton>
          <IonToast isOpen={showToast} message={'hello world!'} />
          {}
      </main>
    </div>
  );
}

export default App;
