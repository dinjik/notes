import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"

const PageTitle: QuartzComponent = ({ displayClass }: QuartzComponentProps) => {
  return (
    <h2 class={classNames(displayClass, "page-title")}>
      <a href="https://dinjik.tech">
        <img src="/static/dinjik.png" alt="dinjik" class="page-title-logo" />
      </a>
    </h2>
  );
};

PageTitle.css = `
.page-title {
  font-size: 1.75rem;
  margin: 0;
  font-family: var(--titleFont);
}

.page-title-logo {
  max-height: 2rem; /* Adjust the size of the logo */
  vertical-align: middle;
}
`

export default (() => PageTitle) satisfies QuartzComponentConstructor