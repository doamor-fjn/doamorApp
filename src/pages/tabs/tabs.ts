import { Component } from '@angular/core';

import { SobrePage } from '../sobre/sobre';
import { StartPage } from '../start/start';
import { PerfilDoadorPage } from '../perfil-doador/perfil-doador';

@Component({
  templateUrl: 'tabs.html'
})

export class TabsPage {

  tab1Root = StartPage;
  tab2Root = StartPage;
  tab3Root = PerfilDoadorPage;
  tab4Root = SobrePage;

  constructor() {

  }
}
