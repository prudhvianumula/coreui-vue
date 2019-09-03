import Vue from 'vue'
export declare class CAlert extends Vue {
  variant: string
  closeButton: boolean
  show: boolean
  fade: boolean
}

export declare class CBadge extends CLink {
  tag: string
  variant: string
  pill: boolean
  textHtml: string
}

export declare class CBreadcrumb extends Vue {
  items: Array<any>
  addClasses: [string, Array<any>, object]
  addLinkClasses: [string, Array<any>, object]
  addLastItemClasses: [string, Array<any>, object]
}

export declare class CBreadcrumbRouter extends Vue {
  addClasses: [string, Array<any>, object]
  addLinkClasses: [string, Array<any>, object]
  addLastItemClasses: [string, Array<any>, object]
}

export declare class CButton extends CLink {
  block: boolean
  pill: boolean
  square: boolean
  ghost: boolean
  outline: boolean
  size: string
  variant: string
  type: string
  pressed: boolean
  textHtml: string
}

export declare class CButtonClose extends Vue {
  iconHtml: string
  buttonClasses: [string, Array<any>, object]
}

export declare class CButtonGroup extends Vue {
  vertical: boolean
  size: string
}

export declare class CButtonToolbar extends Vue {
  justify: boolean
}

export declare class CCallout extends Vue {
  variant: string
}

declare class CardSharedClasses extends Vue {
  tag: string
  variant: string
  borderVariant: string
  textVariant: string
  align: string
}

export declare class CCard extends CardSharedClasses {
  headerHtml: string
  bodyHtml: string
  footerHtml: string
  bodyWrapper: boolean
}

export declare class CCardBody extends CardSharedClasses {
  titleHtml: string
  titleTag: string
  subtitleHtml: string
  subtitleTag: string
  bodyHtml: string
  overlay: boolean
}

export declare class CCardFooter extends CardSharedClasses {
  footerHtml:  string
}

export declare class CCardHeader extends CardSharedClasses {
  headerHtml: string
}

export declare class CCardGroup extends Vue {
  tag: string
  deck:  boolean
  columns: boolean
}

export declare class CCarousel extends Vue {
  interval: number
  animate: boolean
  indicators: boolean
  arrows: boolean
  indicatorClasses: [string, Array<any>, object]
  height: string
  noPauseOnHover: boolean
}

export declare class CCarouselItem extends Vue {
  image: [string, object]
  captionHeader: string
  captionText: string
  active: boolean
}

export declare class CCollapse extends Vue {
  duration: number
  transition: string
  show: boolean
  navbar: boolean
  toggler: string
}

export declare class CDropdown extends Vue {
  togglerText: string
  show: boolean
  disabled: boolean
  addMenuClasses: [string, Array<any>, object]
  addTogglerClasses: [string, Array<any>, object]
  nav: boolean
  noCaret: boolean
  variant: string
  size: string
  split: boolean
  offset: number
  placement: string
  noFlip: boolean
  popperConfig: object
  noPopper: boolean
}

export declare class CDropdownDivider extends Vue {
  tag: string
}

export declare class CDropdownHeader extends Vue {
  tag: string
}

export declare class CDropdownItem extends CLink {}

export declare class CEmbed extends Vue {
  type: string
  ratio: string
  tag: string
}

export declare class CFooter extends Vue {
  fixed: boolean
}

declare class formSharedProps extends Vue {
  validFeedback: string
  invalidFeedback: string
  tooltipFeedback: boolean
  description: string
}

export declare class CFormCheckbox extends CFormRadio {
  trueValue: [string, number]
  falseValue: [string, number]
}

export declare class CFormFile extends formSharedProps {
  label: string
  wasValidated: boolean
  isValid: [boolean, ()=>{}]
  addInputClasses: [string, Array<any>, object]
  addLabelClasses: [string, Array<any>, object]
  horizontal: [boolean, object]
  size: string
  addWrapperClasses: [string, Array<any>, object]

  custom: boolean
  placeholder: string
  multiple: boolean
}

export declare class CFormGroup extends formSharedProps {
  appendHtml: string
  prependHtml: string
  wrapperClasses: [string, Array<any>, object]
}

export declare class CFormInput extends formSharedProps {
  type: string

  appendHtml: string
  prependHtml: string
  readonly: boolean
  plaintext: boolean
  value: string
  lazy: [boolean, number]
  label: string
  wasValidated: boolean
  isValid: [boolean, ()=>{}]
  addInputClasses: [string, Array<any>, object]
  addLabelClasses: [string, Array<any>, object]
  horizontal: [boolean, object]
  size: string
  addWrapperClasses: [string, Array<any>, object]
}

export declare class CFormRadio extends formSharedProps {
  appendHtml: string
  prependHtml: string

  label: string
  wasValidated: boolean
  isValid: [boolean, ()=>{}]
  addInputClasses: [string, Array<any>, object]
  addLabelClasses: [string, Array<any>, object]

  checked: [boolean, string, number]
  value: [string, number, boolean]
  trueValue: [string, number]
  falseValue: [string, number]
  custom: boolean
  inline: boolean
}

export declare class CFormSelect extends formSharedProps {
  appendHtml: string
  prependHtml: string

  label: string
  wasValidated: boolean
  isValid: [boolean, ()=>{}]
  addInputClasses: [string, Array<any>, object]
  addLabelClasses: [string, Array<any>, object]
  horizontal: [boolean, object]
  size: string
  addWrapperClasses: [string, Array<any>, object]

  options: Array<any>
  value: [string, number, boolean, Array<any>]
  plaintext: boolean
  placeholder: string
  custom: boolean
}

export declare class CFormTextarea extends formSharedProps {
  appendHtml: string
  prependHtml: string
  readonly: boolean
  plaintext: boolean
  value: string
  lazy: [boolean, number]
  label: string
  wasValidated: boolean
  isValid: [boolean, ()=>{}]
  addInputClasses: [string, Array<any>, object]
  addLabelClasses: [string, Array<any>, object]
  horizontal: [boolean, object]
  size: string
  addWrapperClasses: [string, Array<any>, object]
}

export declare class CCol extends Vue {
  col: [ boolean, string, number, object ]
  xs: [ boolean, string, number, object ]
  sm: [ boolean, string, number, object ]
  md: [ boolean, string, number, object ]
  lg: [ boolean, string, number, object ]
  xl: [ boolean, string, number, object ]
  tag: string
}

export declare class CContainer extends Vue {
  fluid: boolean
}

export declare class CRow extends Vue {
  noGutters: boolean
  alignV: string
  alignH: string
}

export declare class CHeader extends Vue {
  fixed: boolean
}

export declare class CImage extends Vue {
  src: string
  alt: string
  width: [number, string]
  height: [number, string]
  block: boolean
  fluid: boolean
  fluidGrow: boolean
  rounded: [boolean, string]
  thumbnail: boolean
  align: string
  blankColor: string
}

export declare class CImageLazy extends CImage {
  loadInitially: boolean
  loadOffset: number
  noFade: boolean
  fadeOffset: number
  fadeTime: number
}

export declare class CJumbotron extends Vue {
  tag: string
  fluid: boolean
  header: string
  lead: string
  variant: string
  borderVariant: string
  textVariant: string
}

export declare class CLink extends Vue {
  href: string
  textHtml: string
  rel: string
  target: string
  disabled: boolean
  active: boolean
  activeClass: string
  append: boolean
  event: [string, Array<any>]
  exact: boolean
  exactActiveClass: string
  replace: boolean
  routerTag: string
  to: [string, object]
}

export declare class CListGroup extends Vue {
  tag: string
  flush: boolean
}

export declare class CListGroupitem extends CLink {
  tag: string
  action: boolean
  variant: string
}

export declare class CMedia extends Vue {
  asidePositionClasses: [string, Array<any>, object]
  addAsideClasses: [string, Array<any>, object]
  addBodyClasses: [string, Array<any>, object]
  asideRight: boolean
  asideImageProps: object
  asidePosition: string
}

export declare class CModal extends Vue {
  visible: boolean
  centered: boolean
  title: string
  size: string
  variant: string
  borderVariant: string
  noFade: boolean
  noBackdrop: boolean
  noCloseOnBackdrop: boolean
  noHeader: boolean
  noBody: boolean
  noFooter: boolean
  addModalClasses: [string, Array<any>, object]
  addDialogClasses: [string, Array<any>, object]
  addContentClasses: [string, Array<any>, object]
}

export declare class CNav extends Vue {
  fill: boolean
  justified: boolean
  tabs: boolean
  pills: boolean
  vertical: boolean
}

export declare class CNavItem extends CLink {}

export declare class CNavbar extends Vue {
  tag: string
  light: boolean
  variant: string
  toggleable: [boolean, string]
  fixed: string
  sticky: boolean
  print: boolean
}

export declare class CNavbarBrand extends CLink {
  tag: string
}

export declare class CNavbarNav extends Vue {
  tag: string
  fill: boolean
  justified: boolean
}

export declare class CNavbarToggle extends Vue {}

export declare class CPagination extends Vue {
  activePage: number
  pages: number
  size: string
  align: string
  limit: number
  hideDots: boolean
  hideArrows: boolean
  hideDoubleArrows: boolean
  firstButtonHtml: string
  previousButtonHtml: string
  nextButtonHtml: string
  lastButtonHtml: string
  responsive: boolean
}

export declare class CProgress extends Vue {
  height: string
  variant: string
  striped: boolean
  animated: boolean
  precision: number
  showProgress: boolean
  showValue: boolean
  max: number
  value: number
}

export declare class CProgressBar extends CProgress {}

export declare class CRenderFunction extends Vue {
  items: array
}

export declare class CSidebar extends Vue {
  fixed: boolean
  breakpoint: string
  minimize: boolean
  show: boolean
  showOnMobile: boolean
  noHideOnMobileClick: boolean
  aside: boolean
  light: boolean
  dropdownsBehavior: string
}

export declare class CSidebarFooter extends Vue {}

export declare class CSidebarForm extends Vue {}

export declare class CSidebarHeader extends Vue {}

export declare class CSidebarMinimizer extends Vue {}

export declare class CSidebarNav extends Vue {
  navItems: Array<any>
}

export declare class CSidebarNavDivider extends Vue {}

export declare class CSidebarNavDropdown extends Vue {
  name: string
  route: string
  icon: string
  open: boolean
}

export declare class CSidebarNavItem extends Vue {
  item: object
}

export declare class CSidebarNavItems extends Vue {
  items: Array<any>
}

export declare class CSidebarNavLabel extends Vue {
  name: string
  url: string
  icon: string
}

export declare class CSidebarNavLink extends CLink {
  name: string
  icon: [string, Array<any>, object]
  badge: object
  url: string
}

export declare class CSidebarNavTitle extends Vue {
  name: string
  wrapper: object
}

export declare class CSidebarNavToggler extends Vue {}

export declare class CSpinner extends Vue {
  grow: boolean
  variant: string
  small: boolean
  tag: string
}

export declare class CSwitch extends Vue {
  variant: string
  outline: [boolean, string]
  size: string
  shape: string
  checked: [boolean, string, number]
  value: [string, number, boolean]
  trueValue: [string, number]
  falseValue: [string, number]
  labelOn: string
  labelOff: string
  type: string
}

export declare class CTable extends Vue {
  items: Array<any>
  fields: Array<any>
  itemsPerPage: number
  activePage: number
  indexColumn: [boolean, string]
  filterRow: boolean
  pagination: [boolean, object]
  addTableClasses: [string, Array<any>, object]
  notResponsive: boolean
  sorting: boolean
  small: boolean
  dark: boolean
  striped: boolean
  fixed: boolean
  hover: boolean
  border: boolean
  outlined: boolean
  optionsRow: [boolean, string]
  footer: boolean
  defaultSorter: object
  defaultTableFilter: string
  defaultColumnFilter: object
  loading: boolean
}

export declare class CTabs extends Vue {
  fill: boolean
  justified: boolean
  pills: boolean
  tabs: boolean
  noFade: boolean
  vertical: [boolean, object]
  addNavWrapperClasses: [string, Array<any>, object]
  addNavClasses: [string, Array<any>, object]
  addTabsWrapperClasses: [string, Array<any>, object]
  addTabsClasses: [string, Array<any>, object]
  addTabClasses: [string, Array<any>, object]
}

export declare class CTab extends Vue {
  titleHtml: string, 
  active: boolean
  disabled: boolean
}

declare class ToastProps extends Vue {
  position: string
  titleHtml: string
  bodyHtml: string
  noHeader: boolean
  autohide: number
  noCloseButton: boolean
  noFade: boolean
}

export declare class CToast extends ToastProps {
  show: boolean
}

export declare class CToaster extends ToastProps {
  reverse: boolean
}

export declare class CTreeGenerator extends Vue {
  items: object
  components: object
}

export declare class CTreeGeneratorItem extends Vue {
  item: [string, object]
  name: string
  components: object
}

export declare class CWidgetBrand extends Vue {
  variant: string
  rightHeader: string
  rightFooter: string
  leftHeader: string
  leftFooter: string
  addHeaderClasses: [string, Array<any>, object]
}

export declare class CWidgetDropdown extends Vue {
  variant: string
  header: string
  text: string
}

export declare class CWidgetHeaderDetails extends Vue {
  variant: string
  rightHeader: string
  rightFooter: string
  leftHeader: string
  leftFooter: string
}

export declare class CWidgetIcon extends Vue {
  header: string
  text: string
  noIconPadding: boolean
  variant: string
}

export declare class CWidgetProgress extends Vue {
  header: string
  text: string
  footer: string
  variant: string
  inverse: boolean
  value: number
}

export declare class CWidgetProgressIcon extends Vue {
  header: string
  text: string
  variant: string
  inverse: boolean
  value: number
}

export declare class CWidgetSimple extends Vue {
  header: string
  text: string
}