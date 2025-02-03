//why join -> allow us to maintain integrity 
if we ask 1 query first another query 2nd there can be some changement in database

//why dollar syntax in queries 

so that user cannot give dangerous command as data that makes database to do some bad operation
'$1' -> tell ki this is data not a query
otherwise user can give Delete the table like this query user can give



aakash@aakash-VivoBook-ASUSLaptop-X421EAYB-X413EA:~$ docker run -e POSTGRES_PASSWORD=mysecretpassword -d -p 5431:5432 postgres
c326e9b78051c1250786079fbd82850920cfc27e29b64876b1b2918f52e7584c
aakash@aakash-VivoBook-ASUSLaptop-X421EAYB-X413EA:~$ docker ps
CONTAINER ID   IMAGE      COMMAND                  CREATED         STATUS         PORTS                                         NAMES
c326e9b78051   postgres   "docker-entrypoint.s…"   6 seconds ago   Up 5 seconds   0.0.0.0:5431->5432/tcp, [::]:5431->5432/tcp   nervous_germain
aakash@aakash-VivoBook-ASUSLaptop-X421EAYB-X413EA:~$ docker exec -it c326e9b78051 /bin/bash
root@c326e9b78051:/# psql -h localhost -d postgres -U postgress 
psql: error: connection to server at "localhost" (::1), port 5432 failed: FATAL:  role "postgress" does not exist
root@c326e9b78051:/# psql
psql: error: connection to server on socket "/var/run/postgresql/.s.PGSQL.5432" failed: FATAL:  role "root" does not exist
root@c326e9b78051:/# ls
bin   docker-entrypoint-initdb.d  lib	 mnt   root  srv  usr
boot  etc			  lib64  opt   run   sys  var
dev   home			  media  proc  sbin  tmp
root@c326e9b78051:/# psql
psql: error: connection to server on socket "/var/run/postgresql/.s.PGSQL.5432" failed: FATAL:  role "root" does not exist
root@c326e9b78051:/# psql -h localhost -d postgres -U postgres
psql (17.2 (Debian 17.2-1.pgdg120+1))
Type "help" for help.

postgres=# SELECT now();
              now              
-------------------------------
 2025-02-03 18:26:53.129582+00
(1 row)

postgres=# 

//these are way to use psql using docker 
