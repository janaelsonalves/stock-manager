from ldap3 import Server, Connection, ALL

class LDAP:

    host = "ldap://ldap1.prdf.mpf.mp.br"
    base = "o=prdf"

    @staticmethod
    def get_connection():
        server = Server(LDAP.host, get_info=ALL)
        return Connection(server, auto_bind=True)