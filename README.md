<a name="readme-top"></a>

## Welkedeelauto?

![product image](https://github.com/martijnboers/WelkeDeelauto/blob/main/frontend/public/product.png "Title")

For years I have used shared cars, and I wanted an easy way to have all the prices listed. Since the costs of these
services vary greatly and change a lot, online items/services show outdated prices. Therefore, I created this website
that automatically retrieves the latest prices.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

In true engineering spirit this project is made majorly overkill using the following technologies:

* ![Next JS](https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white)
* ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
* ![FastAPI](https://img.shields.io/badge/FastAPI-005571?style=for-the-badge&logo=fastapi)
* ![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white)
* ![Terraform](https://img.shields.io/badge/terraform-%235835CC.svg?style=for-the-badge&logo=terraform&logoColor=white)
* ![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Prerequisites

This project uses a couple of development wrapper to increase developer experience. To get started install:

* Nix
  ```sh
  sh <(curl -L https://nixos.org/nix/install) --daemon
  ```
* [Direnv](https://direnv.net/docs/hook.html), don't forget to hook into your terminal emulator
* Run `direnv allow` in project root

### Installation

1. Get a [Google Maps API key](https://developers.google.com/maps/documentation/javascript/get-api-key)
2. Clone the repo
   ```sh
   git clone git@github.com:martijnboers/WelkeDeelauto.git
   ```

3. Change directory to frontend and install NPM packages
   ```sh
   npm install
   ```
4. Enter your API in `.env` and set FastAPI backend
   ```js
   GOOGLE_MAPS_ACCESS_TOKEN='ENTER YOUR API';
   BACKEND_URL="http://127.0.0.1:8000"
   ```
5. Run `npm run dev` to start the web server
6. Enter into backend project
7. Run `poetry install`
8. Run `.venv/bin/uvicorn web:app --host 0.0.0.0 --port 8000 `
9. Refresh frontend page
10. Success!

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Contributing

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also
simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## License

Distributed under the GPLv3 License. See `LICENSE` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>
