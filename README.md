# KPI-POC

## Description
This repository aims to be a proof of concept for the creation of metrics that possibly result in KPIs for the business.

<br>

## AWS ACCCOUNT (where the tests were done)
```
AWS Account ID: "262955748666"
User for the deployment in the pipeline: "github-kpi-poc"
```

### installations
```
aws cli
sam cli
```

### Configurations
```
aws configure
```

### Run locally (Template Via SAM) (requiere tener docker instalado y corriendo)
```
yarn local:start
```

<br>

## Architecture (initial iteration)
![Initial Architecture for POC](/architecture/KPI_poc.png?raw=true)

## Final Result (generated from quicksight)
![Capture Test Coverage](/dashboard/testCoverage.png?raw=true)

<br>
<br>

## Architecture (architecture for future deployments in increasing order)
![KPI Improvement](/architecture/KPI_improvement.png?raw=true)

<br>

## Better
![KPI Complex](/architecture/KPI_complex.png?raw=true)