from PIL import Image

import numpy as np

x = np.array(Image.open('ours.png'))

y = np.zeros_like(x)
Image.fromarray(np.uint8(y)).save('sugar.png')