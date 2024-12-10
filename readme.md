Here’s the **README.md** file tailored to the Currency Converter application we just created:

---

```markdown
# Currency Converter API

This is a simple Node.js application that provides a currency conversion API. It uses live exchange rates from a third-party API to convert between currencies.

---

## Features

- Converts an amount from one currency to another.
- Fetches live exchange rates using the ExchangeRate API.
- Built with **Express.js** and containerized using **Docker**.

---

## Prerequisites

- **Node.js** (if running locally)
- **Docker** (if running as a container)
- ExchangeRate API key (get one from [ExchangeRate API](https://exchangeratesapi.io/)).

---

## Getting Started

### 1. Clone the Repository

```bash
git clone <repository-url>
cd currency-converter
```

---

## Running Locally

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment Variables

Create a `.env` file in the root directory and add your ExchangeRate API key:

```plaintext
API_KEY=your_api_key_here
```

### 4. Start the Application

```bash
node index.js
```

### 5. Access the API

Use the following endpoint to convert currency:

```plaintext
GET http://localhost:3000/convert?from=<from_currency>&to=<to_currency>&amount=<amount>
```

#### Example Request:

```plaintext
http://localhost:3000/convert?from=USD&to=INR&amount=10
```

#### Example Response:

```json
{
    "from": "USD",
    "to": "INR",
    "amount": 10,
    "convertedAmount": 830.50,
    "rate": 83.05
}
```

---

## Running with Docker

### 1. Build the Docker Image

```bash
docker build -t currency-converter .
```

### 2. Run the Docker Container

```bash
docker run -p 3000:3000 currency-converter
```

### 3. Access the API

Use the same endpoint as described above:
```plaintext
http://localhost:3000/convert?from=USD&to=INR&amount=10
```

---

## Project Structure

```
currency-converter/
├── index.js          # Main application file
├── package.json      # Project metadata and dependencies
├── .env              # Environment variables
├── Dockerfile        # Docker image instructions
├── .dockerignore     # Files to exclude in Docker builds
└── node_modules/     # Installed dependencies
```

---

## Docker Commands

### Stop the Container
```bash
docker stop <container-id>
```

### Remove the Container
```bash
docker rm <container-id>
```

### Remove the Image
```bash
docker rmi currency-converter
```

---

## Contributing

Feel free to fork this repository and contribute by submitting pull requests.

---

## License

This project is licensed under the **MIT License**.

---

## Author

Developed by **Rishi Kumar** 🚀
```

---

### Save this as `README.md` in the project root directory.

Let me know if you need any further edits or additional instructions! 😊