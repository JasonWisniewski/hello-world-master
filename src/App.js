import {
  IonButton,
  IonToast,
  IonIcon,
  IonHeader,
  IonToolbar,
  IonContent, IonTitle, IonApp
} from '@ionic/react';

import React, {useState} from 'react';
import { play as playIcon } from 'ionicons/icons';

function App() {

    const [showToast, setShowToast] = useState(false);
    const handleClick = () => {
        setShowToast(true);
        setTimeout(() => setShowToast(false), 1500);
    };

  return (
    <IonApp>
      <IonHeader>
        <IonToolbar>
          <IonTitle>My App</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
          <IonButton color="primary" onClick={handleClick}>
            <IonIcon icon={playIcon} slot="start"/>
            click me bitch
          </IonButton>
          <IonToast isOpen={showToast} message={'hello world!'} />
      </IonContent>
    </IonApp>
  );
}

export default App;
