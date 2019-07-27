# zakasanerekawy.pl (sources)

## About this project

This repository contains **sources of my blog about productivity** and dealing with large "todo" lists. Blog is named named *"Zakasane rękawy"*.

Blog is hosted at [zakasanerekawy.pl](https://zakasanerekawy.pl/). All articles are in Polish language.

## Solution stack

Blog is statically generated using [Wyam static content generator](https://wyam.io/). This repository contains both input and output (generated) files.

This setup allows to easily configure continuous deployment on any hosting. It also allows to go back in time and see previous version of the blog without the need to install compatible version of Wyam generator. On the other hand, there's a need to commit generated files which makes commits more difficult to read and getting bigger over time.

Perhaps over time this repository will be split into two separate repositories (for input and output files) to keep the convenience, but maintain clean commit history.

# Screenshot

![Taurit.Toolkit.FindOptimumDiet](screenshot.png)