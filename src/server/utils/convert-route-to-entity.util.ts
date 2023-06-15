const mapping: Record<string, string> = {
  events: 'event',
  invitations: 'invitation',
  schools: 'school',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
