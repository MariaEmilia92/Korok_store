import * as React from 'react';
import './footer.css';

export default function SimplesContainer() {
  return (
    <React.Fragment>
      <div className='mediadiv' style={{ backgroundColor: 'green', height: '100%', width: '100%', }}>
      <h1 className='footertitulo'>KorokStore</h1>
      <p className='pFooter'>Aqui você encontra tudo o que precisa para sua aventura!</p>
      <p className='pFooter' style={{paddingBottom: '20px'}}>Contato: korokstore@hyrule.com</p>
      </div>
    </React.Fragment>
  );
}

