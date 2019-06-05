import { HostListener } from '@angular/core'

export class BaseComponent {
  /**
   * Maior ou igual a 992px
   */
  isLG: boolean
  /**
   * Maior ou igual a 768px e menor que 992px
   */
  isMD: boolean
  /**
   * Tudo abaixo de 768px
   */
  isSM: boolean

  constructor() {
    this.isLG = this.screenIsLG()
    this.isMD = this.screenIsMD()
    this.isSM = this.screenIsSM()
  }

  /**
   * Evento de redimencionamento dos componentes:
   */
  @HostListener('window:resize', ['$event'])
  onResize() {
    this.isLG = this.screenIsLG()
    this.isMD = this.screenIsMD()
    this.isSM = this.screenIsSM()
  }

  /**
   * Verifica se a resolução é maior ou igual a 992px e menor que 1200px
   */
  private screenIsLG() {
    return window.innerWidth >= 992
  }

  /**
   * Verifica se a resolução é maior ou igual a 768px e menor que 992px
   */
  private screenIsMD() {
    return window.innerWidth >= 768 && window.innerWidth < 992
  }

  /**
   * Verifica se a resolução é menor que 768px
   */
  private screenIsSM() {
    return window.innerWidth < 768
  }
}
