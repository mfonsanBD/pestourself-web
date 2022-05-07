import { render } from 'utils/test-utils'
import { FormLink, FormWrapper } from '.'

describe('<Form />', () => {
  it('should render the heading', () => {
    const { container } = render(
      <FormWrapper>
        <FormLink>
          My nice <a href="#">link</a>
        </FormLink>
      </FormWrapper>
    )

    expect(container.parentElement).toMatchInlineSnapshot(`
      .c0 form {
        margin-top: 2.4rem;
      }

      .c1 {
        font-size: 1.4rem;
        color: #212121;
        text-align: center;
      }

      .c1 a {
        color: #FEAE11;
        -webkit-text-decoration: none;
        text-decoration: none;
        border-bottom: 0.1rem solid #FEAE11;
        -webkit-transition: color,border,0.1s ease-in-out;
        transition: color,border,0.1s ease-in-out;
      }

      .c1 a:hover {
        color: #db9101;
        border-bottom: 0.1rem solid #db9101;
      }

      <body>
        <div>
          <div
            class="c0"
          >
            <div
              class="c1"
            >
              My nice 
              <a
                href="#"
              >
                link
              </a>
            </div>
          </div>
        </div>
      </body>
    `)
  })
})
