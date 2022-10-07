from flask import Flask, request, render_template
from app import app
import re
import random
import time

def get_response(user_input):
    split_message = re.split(r'\s|[,:;.?!-_]\s*', user_input.lower())
    response = check_all_messages(split_message)
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
        response('Hola, bienvenid@ a nuestro chat ... ¿En que podemos ayudarte hoy?', ['hola', 'saludos', 'buenas'], single_response = True)
        response('Te podemos ayudar en lo que necesitas! actualmente tenemos integracion con (Microsoft Azure, Oracle, AWS)', ['informacion', 'cloud', 'migracion', 'consultoria'], single_response=True)
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

    time.sleep(3)
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