from flask import Flask, request, render_template
from app import app
import re
import random
import time

def get_response(user_input):
    # validate if user input is a string
    # if not isinstance(user_input, str):
    #     print('Error: user input is not a string')
    # else:
    #     print('User input: ' + user_input)

    try:
        print('User input: ' + user_input)
    except:
        print('Error: user input is not a string')

    # split_message = re.split(r'\s|[,:;.?!-_]\s*', user_input.lower())
    split_message = re.split(r'\s|[ ]\s*', user_input.lower())
    print('Split message: ' + str(split_message))
    response = check_all_messages(split_message)
    print('Bot response: ' + response)
    return response

def message_probability(user_message, recognized_words, single_response=False, required_word=[]):
    message_certainty = 0
    has_required_words = True

    for word in user_message:
        if word in recognized_words:
            message_certainty +=1

    percentage = float(message_certainty) / float (len(recognized_words))

    for word in required_word:
        if word not in user_message:
            has_required_words = False
            break
    if has_required_words or single_response:
        return int(percentage * 100)
    else:
        return 0

def check_all_messages(message):
        highest_prob = {}

        def response(bot_response, list_of_words, single_response = False, required_words = []):
            nonlocal highest_prob
            highest_prob[bot_response] = message_probability(message, list_of_words, single_response, required_words)

        #response('... respuesta ...', ['test'], required_words=['test'])
        response('Hola, bienvenid@ a nuestro chat ... ¿En que podemos ayudarte hoy?', ['hola', 'saludos', 'buenas', 'hi'], single_response = True)
        response('Te podemos ayudar en lo que necesitas! actualmente tenemos integracion con (Microsoft Azure, Oracle, AWS)', ['informacion', 'información', 'nube','cloud', 'migracion', 'migración', 'consultoria', 'asesoria', 'asesoramiento'], single_response=True)
        response('Gracias a ti por visitar nuestro chat, hasta luego!', ['gracias', 'te lo agradezco', 'thanks'], single_response=True)
        
        response('Ofrecemos servicios para Maquinas virtuales, Almacenamiento y Bases de datos', ['buscando', 'cuales', 'opciones', 'servicios'], single_response=True)

        # almacenamiento
        response('¡Muy bien! ¿Cuánto almacenamiento vas a necesitar? 1) 100GB - 2) 250GB', ['almacenamiento'], single_response=True)

        response('Requieres 100GB de almacenamiento', [100, '100', '100 GB', '100GB'], single_response=True)
        response('Requieres 250GB de almacenamiento', [250, '250', '250 GB', '250GB'], single_response=True)

        # maquinas virtuales
        response('¡Que bien! Ahora podrias darme los parametros de tu VM, comenzemos por la RAM', ['maquina virtual', 'VM', 'maquina', 'virtual'], single_response=True)
        response('Para tu VM prefieres elegir el numero de nucleos en tu procesador o el numero de CPU en tu maquina?', ['nuclueo', 'CPU'], single_response=True)

        response('Super!', ['si', 'yes'], single_response=True)

        response('Gracias a ti por visitar nuestro chat, hasta luego!', ['gracias', 'te lo agradezco', 'thanks'], single_response=True)

        best_match = max(highest_prob, key=highest_prob.get)
        #print(highest_prob)
 
        return unknown() if highest_prob[best_match] < 1 else best_match

def unknown():
    opciones = [
        'puedes repetirlo de nuevo?',
        'No estoy seguro de lo quieres, podrias repetir nuevamente',
        'No entiendo lo que dices ¿Podrias repetirlo?'
        ]
    response = opciones[random.randrange(3)]
    return response

@app.route('/iHaveQuestion', methods=['POST'])
def json_example():
    request_data = request.get_json()
    contId = request_data['contId'] 
    user_input = request_data['user_input'] 

    time.sleep(1.5)
    if int(contId) == 1:
        return 'Nombre|' + user_input
    return get_response(user_input)
    # return {
    #     "response": get_response(user_input)
    # }

@app.route('/iHaveQuestion', methods=['GET'])
def getjson_example():
    args = request.args
    user_input = args['user_input']
    time.sleep(3)
    return get_response(user_input)
    # return {
    #     "response": get_response(user_input)
    # }
# while True:
#     user_input = input('Tu: ')
#     if user_input.lower() == 'salir':
#         break
#     print("Chat: " + get_response(user_input))

# @app.route('/')
# def home():
#     return "Hello world!"

# @app.route('/template') 
@app.route('/')
def template():
    return render_template('home.html')