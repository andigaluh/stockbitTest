## Rest API from omDB

### Getting started 
- `git clone https://github.com/andigaluh/stockbitTest.git`
- `cd movie_api`
- `npm install`
- Create database (mysql)
- Fill the .env from .env.template
- `npm start`
- running jest test
- `npm test`
----------

### Endpoint:

#### Movie

Query

| **params** 	| **required**      |
|---------------|-------------------|
| keyword      	| Yes         	    |
| Optional      | page         	    |

``` http://localhost:3000/movie?keyword=dota ```

Online Demo [HERE](http://202.159.121.198:3231/movie?keyword=dota).

#### detail

Query

| **params** 	|       **required**      |  **notes**   |
|---------------|--------------------|----------------------|
| id      	    | Yes         	 |          imdbID         	|


``` http://localhost:3000/detail?id=tt0111161 ```

Online Demo [HERE](http://202.159.121.198:3231/detail?id=tt0111161).