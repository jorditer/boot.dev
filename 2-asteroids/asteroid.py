import pygame
from circleshape import CircleShape
from constants import ASTEROID_MIN_RADIUS
import random

class Asteroid(CircleShape):
	def __init__(self, x, y, radius):
		super().__init__(x, y, radius)
	
	def draw(self, screen):
		# position = 
		pygame.draw.circle(screen, "white", self.position, self.radius)

	def update(self, dt):
		self.position += (self.velocity * dt)

	def split(self):
		self.kill()
		if self.radius <= ASTEROID_MIN_RADIUS:
			return
		angle = int(random.uniform(20, 50))
		vector1 = pygame.math.Vector2.rotate(self.velocity, angle)
		vector2 = pygame.math.Vector2.rotate(self.velocity, -angle)
		new_radius = self.radius - ASTEROID_MIN_RADIUS
		asteroid1 = Asteroid(self.position[0], self.position[1], new_radius)
		asteroid1.velocity = vector1 * 1.2
		asteroid2 = Asteroid(self.position[0], self.position[1], new_radius)
		asteroid2.velocity = vector2 * 1.2
	