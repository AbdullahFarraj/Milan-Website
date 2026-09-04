import os
import urllib.request

urls = [
    "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWkzVtRU-oCkeW3vXyHymfQkxwFuEB4MamL1Di8kzKUceK8lVuGTTGIMlb3e30HmWOy6qGTWL1xO-gsPZaXHTo4IRlimiDmMr_WU-uAVRMTqHHJSeytv8zP10bn915Vb-ldhmXw3zTmB8cI=s1600",
    "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWkfr0GeZTvy9aCUdggGDPHYN1P5dGz8ofi3qWPoleEyk5PtHWom9bPjaw88VH7wdCby8yPJbGK9L8EARJv88KhiYhtcTrZgqpKCw5RZhRIPVvdAoQfrUyGo2RX1VJFti9JD1_ju9YnO5AEj=s1600",
    "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWn_uH6ocws-zgAwjPRLlN-gK4jni2KIN58vgk1ozGkvvluJy3IUYA0MpIgUKZUme4lkEjcOm9yfkiJXXhR7O6-42ANIR_lyhjhgKOwqz9F-IbJR1X3mLQftlllyHI9dyH5COvcxk1W9Vhs=s1600",
    "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWn7zUFRdF4NL0QjyI54oCqg9Y-DkL5ruiY_00_Ix2fH8ibFEhDozONsJ4ApmHnZwh5Bwa2M-yDGUBjMEbfUTIu0f-Z3eJeykwEL_RZe0slYog0N15-9B1tYPHEv7Xtoi9VDfKKb2T-6E4I=s1600",
    "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWkkv6B_cHt2iPnhaCeKVrMcDmPL5Qbjd_xGQc5VCyJbMlldLIWLVGIzSy_UGADDxiiVJKDZ3sYn9n36egGQvKUb1gsfSdmkI0Hgk1zrbHU5Bf8DCx-uc8PcDnkwThCSaL4Cb6u6DJ74jTc=s1600",
    "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWlXz1mHKji6kBxVBjsEHGkAoE0TKQV-ry8PfTYxRaoSKq5gJmSDqySWHeCrICrXqaaYN_yx2_dGD96XBQ7txs6ElSiVuFgcCEPewDyiIsUpSakbH_n7T92I4pV9T_uJBMhlokXkUkXdQIIR=s1600",
    "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWnHUsv2QmmYeVRUCjbEyyNoI5ZF_jwJ5TQm_9YBGFl_Jxb7_IcMwnazFYtzPjxTqfTPnIqKmksO9m4GKC8lcPEnTOQgW9Y_4R-TSqQSdfXtUw6zJ66QP4PvmFYahKRaiDemFkL4vRAshdY=s1600",
    "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWk5iWP0Hsp5-FIqScdttWMJ9QK3ElGChKFY7K9lCMN3D7PivDT0MUjG1_vr44t6VPdsJHurN6wFNYC61ZjEbXGgdNm_W5bZcbaeU4rFye3SPpnGzIFV7ZzDCKvi4cuPZcMcFrYTpPoOuAdY=s1600"
]

os.makedirs('images/catalog', exist_ok=True)

for i, url in enumerate(urls):
    filename = f'images/catalog/store_{i+1}.jpg'
    print(f'Downloading {url} to {filename}')
    try:
        urllib.request.urlretrieve(url, filename)
    except Exception as e:
        print(f'Failed to download {url}: {e}')

print('Done downloading images.')
