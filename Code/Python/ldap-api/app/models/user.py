from api.ldap import LDAP

attributesList = [
  'cn',
  'company',
  'departmentNumber',
  "displayName",
  'dn',
  'employeeNumber',
  'employeeType',
  'facsimileTelephoneNumber',
  'fullName',
  'gidNumber',
  'givenName',
  'groupMembership',
  'homeDirectory',
  'l',
  'lockedByIntruder',
  'loginDisabled',
  'loginGraceLimit',
  'loginGraceRemaining',
  'loginIntruderAddress',
  'loginTime',
  'mail',
  'managerWorkforceID',
  'networkAddress',
  'ou',
  'passwordExpirationInterval' ,
  'passwordExpirationTime',
  'registeredAddress',
  'sn',
  'st',
  'street',
  'telephoneNumber',
  'title',
  'uid',
  'workforceID',
]

class User:

    @staticmethod
    def get_users():
        return [
            {"name" "João"},
            {"name" "Maira"},
            {"name" "Teresa"},
            {"name" "Pedro"},
        ]
    
    @staticmethod
    def get_users_by_id(uid):
        conn = LDAP.get_connection()
        # fields = ['st',  'street',  'telephoneNumber',  'title',  'uid',  'workforceID',  'dn']
        # fields = attributesList
        conn.search(LDAP.base, '(&(objectclass=person)(|(uid=*' + uid + '*)(fullName=*' + uid + '*)))', attributes=attributesList)
        return conn.response_to_json()