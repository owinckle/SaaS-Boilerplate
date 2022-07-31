from rest_framework import status as rest_status
from rest_framework.response import Response

def success_request(data={}):
    return Response(data, status=rest_status.HTTP_200_OK)


def forbidden_request(data={}):
    return Response(data, status=rest_status.HTTP_403_FORBIDDEN)


def unauthorized_request(data={}):
    return Response(data, status=rest_status.HTTP_401_UNAUTHORIZED)


def bad_request(data={}):
    return Response(data, status=rest_status.HTTP_400_BAD_REQUEST)