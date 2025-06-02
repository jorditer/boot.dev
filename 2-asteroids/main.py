import pygame
from constants import *
from player import Player

def main():
	print("Starting Asteroids!")
	print(f"Screen width: {SCREEN_WIDTH}")
	print(f"Screen height: {SCREEN_HEIGHT}")
	pygame.init()
	clock = pygame.time.Clock()
	screen = pygame.display.set_mode((SCREEN_WIDTH, SCREEN_HEIGHT))
	dt = 0
	player = Player(SCREEN_WIDTH / 2, SCREEN_HEIGHT / 2)
	while (1):
		for event in pygame.event.get():
			if event.type == pygame.QUIT:
				return
		pygame.Surface.fill(screen, "black")
		player.draw(screen)
		pygame.display.flip()
		dt = clock.tick(60)


if __name__ == "__main__":
	main()	