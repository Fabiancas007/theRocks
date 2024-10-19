# Realizado por Fabián Católico

# Importación de las librerías necesarias de Selenium, CSV, os y Translator
from googletrans import Translator
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.chrome.options import Options
import json
import os

translator = Translator()

# Buscar la ubicación del driver de Google Chrome y conectarlo para manipularlo
def connectChromeDriver(page):
    # Configurar el driver de Chrome
    chrome_options = Options()
    service = Service(executable_path='C:/Drivers/chromedriver.exe')
    driver = webdriver.Chrome(service=service, options=chrome_options)
    driver.get(page)
    driver.implicitly_wait(0.5)  # Aumentar el tiempo de espera implícito
    return driver

# Extración de datos de las diversas rocas que se encuentran en el listado de páginas
def processRocks(driver, class_container, class_paragraph, class_iframe, count, origin, name):
    rock = driver.find_elements(By.CSS_SELECTOR, class_container)
    for ro in rock:
        # Inicializar valores por defecto
        name_text = 'No disponible'
        paragraph_text = 'No disponible'
        src_iframe = 'No disponible'

        try:
            # # Obtener la descripción de la roca
            # paragraph_elements = ro.find_elements(By.XPATH, class_paragraph)
            # if paragraph_elements and paragraph_elements[0].text.strip():
            #     paragraph_text = paragraph_elements[0].text

            # Obtener la url del iframe del canvas de la roca
            iframe_elements = ro.find_elements(By.XPATH, class_iframe)
            if iframe_elements:
                src_iframe = iframe_elements[0].get_attribute('src')

            # Traducir el párrafo con la información de la roca
            paragraph_text = translator.translate(paragraph_text, src='en', dest='es').text

            # Guardar los datos de la roca en la lista
            rock_dict = {
                'ORIGEN': origin,              
                'NOMBRE': name, 
                'CANVAS': src_iframe,
            }
            rock_list.append(rock_dict)

            # Imprimir los resultados
            print(f'{count}. Origen: {origin} Nombre: {name}\n   Canvas: {src_iframe}')

        except Exception as e:
            print(f"Error en la roca {count}: {e}")

# Crear el archivo CSV con los datos extraidos de las rocas
# Crear el archivo CSV con los datos extraidos de las rocas
def createJSON():
    # Verifica si el archivo ya existe y tiene contenido
    file_exists = os.path.exists(file_name) and os.path.getsize(file_name) > 0

    with open(file_name, 'a', encoding='utf-8') as json_file:
        json.dump(rock_list, json_file, ensure_ascii=False, indent=4)

    print(f'Se ha modificado el archivo {file_name}')
    rock_list.clear()

def executeProcess(count, origin, name, page):
    driver = connectChromeDriver(page)
    processRocks(driver, class_container, class_paragraph, class_iframe, count, origin, name)
    driver.quit()
    createJSON()

# Páginas de las rocas para realizarles webscraping
pages = [{'Origin':'Ígnea', 'Type':'Andesita', 'Page':'https://sketchfab.com/3d-models/andesite-igneous-rock-romania-ac6390007b0f46aead2a1a48e79ef992'},
         {'Origin':'Ígnea', 'Type':'Basalto', 'Page':'https://sketchfab.com/3d-models/basalt-usa-2519297694a64748b79b50182d737ec9'},
         {'Origin':'Ígnea', 'Type':'Conglomerado', 'Page':'https://sketchfab.com/3d-models/conglomerate-usa-d9f8181db8bd4afc9904c12350006ddb'},
         {'Origin':'Ígnea', 'Type':'Diamante', 'Page':'https://sketchfab.com/3d-models/diamond-91eaf1b93a5447e4afa21d342f53c208'},
         {'Origin':'Ígnea', 'Type':'Diorita', 'Page':'https://sketchfab.com/3d-models/diorite-igneous-rock-romania-dbf453923ed3453d80269dd85f6c398c'},
         {'Origin':'Ígnea', 'Type':'Dunita', 'Page':'https://sketchfab.com/3d-models/dunite-66a422afabf045bf953423ed03411dad'},
         {'Origin':'Ígnea', 'Type':'Epidota', 'Page':'https://sketchfab.com/3d-models/e-is-for-epidote-12df9070b5684645877791ca746c8916'},
         {'Origin':'Ígnea', 'Type':'Feldespato de ortoclasa', 'Page':'https://sketchfab.com/3d-models/orthoclase-feldspar-coated-with-epidote-crystals-8829601134b74e10a9054ed909f495ed'},
         {'Origin':'Ígnea', 'Type':'Gabro', 'Page':'https://sketchfab.com/3d-models/gabbro-aa56e63c07454d489477cdd636384985'},
         {'Origin':'Ígnea', 'Type':'Granito', 'Page':'https://sketchfab.com/3d-models/granite-rock-yellowish-brown-519c813e95af46a59e010539cd02ac5f'},
         {'Origin':'Ígnea', 'Type':'Granodiorita', 'Page':'https://sketchfab.com/3d-models/granodiorite-igneous-rock-romania-68bb439f9eca462b8d57933f07a02d97'},
         {'Origin':'Ígnea', 'Type':'Limolita', 'Page':'https://sketchfab.com/3d-models/siltstone-49-05-06-2020-bb0b48b63cf945fba1d91ce4987faaaf'},
         {'Origin':'Ígnea', 'Type':'Magnetita', 'Page':'https://sketchfab.com/3d-models/m-is-for-magnetite-d10f1e55221c440b97b6267c702f185d'},
         {'Origin':'Ígnea', 'Type':'Microgranito', 'Page':'https://sketchfab.com/3d-models/microgranite-igneous-rock-c4c51474f9f94ecf80c69fb967fa5a10'},
         {'Origin':'Ígnea', 'Type':'Norita', 'Page':'https://sketchfab.com/3d-models/norite-cumulate-point-sal-ophiolite-ca-f111901e1a514bf8824ed29b71125ca8'},
         {'Origin':'Ígnea', 'Type':'Obsidiana', 'Page':'https://sketchfab.com/3d-models/obsidian-c91a60c2ef2d4e28aa280c9df2afed9b'},
         {'Origin':'Ígnea', 'Type':'Olivino', 'Page':'https://sketchfab.com/3d-models/olivine-b978775d10c94646b8a3267094c24f45'},
         {'Origin':'Ígnea', 'Type':'Sienita', 'Page':'https://sketchfab.com/3d-models/syenite-007b870a8a934f2f9f0b8fa8c8dc065d'},
         {'Origin':'Ígnea', 'Type':'Toba', 'Page':'https://sketchfab.com/3d-models/rhyolitic-tuff-spain-9cd1f6033dac4e2b9dc598ec6f632ceb'},
         {'Origin':'Metamórfica', 'Type':'Anfibolita', 'Page':'https://sketchfab.com/3d-models/amphibolite-metamorphic-rock-b4d742d0a29142a48e2c34c0e2be9445'},
         {'Origin':'Metamórfica', 'Type':'Anhidrita', 'Page':'https://sketchfab.com/3d-models/anhydrite-44d9ffc2ef0e4073a5bb7e6a9fe05fe9'},
         {'Origin':'Metamórfica', 'Type':'Biotita', 'Page':'https://sketchfab.com/3d-models/biotite-book-948cd5abf7fe49c4999ae57b20578b45'},
         {'Origin':'Metamórfica', 'Type':'Esquisto', 'Page':'https://sketchfab.com/3d-models/esquisto-abc6d5be3b1b4b6daa64d53ec1647f3f'},
         {'Origin':'Metamórfica', 'Type':'Feldespato de Gneiss', 'Page':'https://sketchfab.com/3d-models/bookshelved-feldspar-in-a-sheared-gneiss-8b57c51bd4a4489c8fbe386849f8100a'},
         {'Origin':'Metamórfica', 'Type':'Galena', 'Page':'https://sketchfab.com/3d-models/galena-233-6-2-2020-379392ca2ad34967924a05a21290c6d5'},
         {'Origin':'Metamórfica', 'Type':'Gneiss', 'Page':'https://sketchfab.com/3d-models/gneiss-metamorphic-rock-8375d0f490564fbfbd78773d92291b24'},
         {'Origin':'Metamórfica', 'Type':'Marga', 'Page':'https://sketchfab.com/3d-models/marl-outcrop-2-240f6a6ca97945378f5a4c37e91aefc8'},
         {'Origin':'Metamórfica', 'Type':'Mármol', 'Page':'https://sketchfab.com/3d-models/marble-3e6a621e4b084e44b78e71e9eabfad99'},
         {'Origin':'Metamórfica', 'Type':'Mica', 'Page':'https://sketchfab.com/3d-models/mica-andesite-d86d5bb0ebb14267a3d09cf3e5c1625a'},
         {'Origin':'Metamórfica', 'Type':'Mica de esquisto', 'Page':'https://sketchfab.com/3d-models/mica-schist-5d5f1f81dc9e47faa2c4644d542a2daf'},
         {'Origin':'Metamórfica', 'Type':'Pizarra', 'Page':'https://sketchfab.com/3d-models/slate-taiwan-b8d8e2147dbf43e292a937fad475b990'},
         {'Origin':'Sedimentaria', 'Type':'Arenisca', 'Page':'https://sketchfab.com/3d-models/sandstone-afec632ff42c44b380e6fa86797523ad'},
         {'Origin':'Sedimentaria', 'Type':'Argillita', 'Page':'https://sketchfab.com/3d-models/argillite-carolina-slate-belt-71aa84d37f314c04b64507e7b653c5f0'},
         {'Origin':'Sedimentaria', 'Type':'Augita', 'Page':'https://sketchfab.com/3d-models/altered-augite-basalt-italy-993ff13c27214ea3b614bb0e447c0432'},
         {'Origin':'Sedimentaria', 'Type':'Caliza', 'Page':'https://sketchfab.com/3d-models/limestone-ef5aa3b35c194670bec29b6e8246aa34'},
         {'Origin':'Sedimentaria', 'Type':'Carbón', 'Page':'https://sketchfab.com/3d-models/coal-c8d2447cc0ed4539aa13dc633596f387'},
         {'Origin':'Sedimentaria', 'Type':'Cuarcita', 'Page':'https://sketchfab.com/3d-models/quartzite-9902e1d81bca4df4abfed8bf7c13ab6a'},
         {'Origin':'Sedimentaria', 'Type':'Cuarzo', 'Page':'https://sketchfab.com/3d-models/quartz-40dbf45ad43b485fa9188a5507e8fed4'},
         {'Origin':'Sedimentaria', 'Type':'Dolomía', 'Page':'https://sketchfab.com/3d-models/dolomite-b0aa90e50d2349c78e17b4cd1bd30f09'},
         {'Origin':'Sedimentaria', 'Type':'Grauvaca', 'Page':'https://sketchfab.com/3d-models/graywacke-rock-0074654c0fce465dbb1bbbf5fcdb791d'},
         {'Origin':'Sedimentaria', 'Type':'Halita', 'Page':'https://sketchfab.com/3d-models/halite-a2c875b7e34e41d9bd9202aa9f587d36'},
         {'Origin':'Sedimentaria', 'Type':'Lutita', 'Page':'https://sketchfab.com/3d-models/shale-group-1-ag222-2021-24cd2b135e7744f8b0966e2798ba5763'},
         {'Origin':'Sedimentaria', 'Type':'Moscovita', 'Page':'https://sketchfab.com/3d-models/moscovita-281bc57cd8e74a6498fc8a9881d089c7'}  
        ]

# Lista para almacenar la información de las rocas
rock_list = []

# Clases y Xpaths para obtener los datos solicitados
class_container = 'div.model-page-main'
class_paragraph = '//*[@id="descriptionContent"]/p'
class_iframe = '//*[@id="api-frame"]'

# Nombre del fichero CSV a crear y modificar
file_name = 'Rocas_canva_info.json'

# Ejecución del script
for count, rock in enumerate(pages, start=1):
    executeProcess(count, rock['Origin'], rock['Type'], rock['Page'])
