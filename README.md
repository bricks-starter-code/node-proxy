# node-proxy

This report contains the boilerplate to use NodeJS as a proxy service.
Note that on linux systems, you cannot bind to ports less than 1024 unless you use sudo or allow node to access these reserved ports.

To give node access to reserved ports without using sudo, using the following commands:

```which node```

This should provide the location of the node binary.

```sudo setcap 'cap_net_bind_service=+ep' [node path]```

To learn more, you can read the explanation here:

https://gist.github.com/firstdoit/6389682#:~:text=You%20can%20now%20bind%20to%20port%2080%20without,node%20and%20substitute%20%2Fusr%2Flocal%2Fbin%2Fnode%20for%20wherever%20it%20is.
