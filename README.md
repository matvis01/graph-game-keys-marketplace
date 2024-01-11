# Game Key Marketplace Subgraph

This repository contains the subgraph for the Game Key Marketplace, a decentralized marketplace for game keys on the Ethereum blockchain.

## Getting Started

To set up and deploy the Game Keys Marketplace, use the following commands:

```bash
# Generate the code for the subgraph
graph codegen

# Build the subgraph
graph build

# Deploy the subgraph
graph deploy --studio game-keys-marketplace
```

## Project Structure

- `subgraph.yaml`: This file defines the Ethereum data sources to be indexed by the subgraph and how the subgraph should react to different Ethereum events.
- `schema.graphql`: This file defines the data schema for the subgraph.
- `src/`: This directory contains the AssemblyScript mappings for the subgraph.
- `generated/`: This directory contains the auto-generated TypeScript classes for the entities defined in the schema and the ABIs of the smart contracts used.
- `tests/`: This directory contains the unit tests for the subgraph mappings.

## License

This project is licensed under the [MIT License](LICENSE).
